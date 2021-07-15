"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDocFrontMatter = void 0;
const utils_validation_1 = require("@docusaurus/utils-validation");
// NOTE: we don't add any default value on purpose here
// We don't want default values to magically appear in doc metadatas and props
// While the user did not provide those values explicitly
// We use default values in code instead
const DocFrontMatterSchema = utils_validation_1.JoiFrontMatter.object({
    id: utils_validation_1.JoiFrontMatter.string(),
    title: utils_validation_1.JoiFrontMatter.string().allow(''),
    description: utils_validation_1.JoiFrontMatter.string().allow(''),
    slug: utils_validation_1.JoiFrontMatter.string(),
    sidebar_label: utils_validation_1.JoiFrontMatter.string(),
    sidebar_position: utils_validation_1.JoiFrontMatter.number(),
    custom_edit_url: utils_validation_1.JoiFrontMatter.string().allow('', null),
    parse_number_prefixes: utils_validation_1.JoiFrontMatter.boolean(),
});
function validateDocFrontMatter(frontMatter) {
    return utils_validation_1.validateFrontMatter(frontMatter, DocFrontMatterSchema);
}
exports.validateDocFrontMatter = validateDocFrontMatter;
