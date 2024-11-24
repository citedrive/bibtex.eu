import React, { useState, type ChangeEvent, type FormEvent } from 'react';

interface Metadata {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  author?: string;
  year?: number;
}

function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
  
    return `${year}-${month}-${day}`;
  }

const UrlInputComponent: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [useBibLaTeX, setUseBibLaTeX] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMetadata(null);
    setError(null);
  
    try {
      setLoading(true)
      const response = await fetch(`https://api.microlink.io?url=${url}`);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      const metadata: Metadata = {
        title: data.data.title,
        description: data.data.description,
        image: data.data.image?.url,
        url: url,
        author: data.data.author,
        year: data.data.date,
      };
      
      setMetadata(metadata);
      setLoading(false)
    } catch (error) {
      setError('Failed to extract metadata');
    }
  };
  

  const formatBibTeX = (metadata: Metadata) => {
    return `@misc{${metadata.title?.replace(/\s+/g, '_').toLowerCase() || 'citation'},
  title        = {${metadata.title || 'No title'}},
  author       = {${metadata.author || 'Unknown'}},
  year         = ${metadata.year || 'Unknown'},
  note         = {\\url{${metadata.url}} [Accessed: (${getCurrentDate()})]}
}`;
  };

  const formatBibLaTeX = (metadata: Metadata) => {
    return `@online{${metadata.title?.replace(/\s+/g, '_').toLowerCase() || 'citation'},
  title        = {${metadata.title || 'No title'}},
  author       = {${metadata.author || 'Unknown'}},
  year         = ${metadata.year || 'Unknown'},
  url          = {${metadata.url}},
  urldate      = {${getCurrentDate()}}
}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Paste the URL of website you want to cite"
          value={url}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        <button type="submit">Cite website</button>
      </form>
      <div>
        <label>
          <input
            type="checkbox"
            checked={useBibLaTeX}
            onChange={() => setUseBibLaTeX(!useBibLaTeX)}
          />
          Use BibLaTeX format
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p style={{ color: 'green' }}>{"Loading"}</p>}
      {metadata && (
        <div>
          <h3>{useBibLaTeX ? 'BibLaTeX Entry' : 'BibTeX Entry'}:</h3>
          <pre>{useBibLaTeX ? formatBibLaTeX(metadata) : formatBibTeX(metadata)}</pre>
          
        </div>
      )}
    </div>
  );
};

export default UrlInputComponent;