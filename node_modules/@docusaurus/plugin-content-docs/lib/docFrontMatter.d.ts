/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare type DocFrontMatter = {
    id?: string;
    title?: string;
    description?: string;
    slug?: string;
    sidebar_label?: string;
    sidebar_position?: number;
    custom_edit_url?: string | null;
    parse_number_prefixes?: boolean;
};
export declare function validateDocFrontMatter(frontMatter: Record<string, unknown>): DocFrontMatter;
