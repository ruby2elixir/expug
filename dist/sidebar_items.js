sidebarNodes={"exceptions":[{"id":"Expug.Error","title":"Expug.Error","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"exception_message/2","anchor":"exception_message/2"},{"id":"message/1","anchor":"message/1"}]}],"extras":[{"id":"api-reference","title":"API Reference","headers":[]},{"id":"history","title":"Changelog","headers":[]},{"id":"readme","title":"Expug","headers":[{"id":" Installation","anchor":"installation"},{"id":" Syntax","anchor":"syntax"},{"id":" Thanks","anchor":"thanks"}]},{"id":"how_it_works","title":"Misc: How it works","headers":[]},{"id":"line_number_preservation","title":"Misc: Line number preservation","headers":[{"id":" Internal notes","anchor":"internal-notes"}]},{"id":"prior_art","title":"Misc: Prior art","headers":[]},{"id":"code","title":"Syntax: Code","headers":[{"id":" Bufferred code","anchor":"bufferred-code"},{"id":" Conditionals and Loops","anchor":"conditionals-and-loops"},{"id":" Multiline","anchor":"multiline"}]},{"id":"comments","title":"Syntax: Comments","headers":[]},{"id":"compatibility_with_pug","title":"Syntax: Compatibility with Pug","headers":[{"id":" Added","anchor":"added"},{"id":" Changed","anchor":"changed"},{"id":" Removed","anchor":"removed"},{"id":" The same","anchor":"the-same"}]},{"id":"doctype","title":"Syntax: Doctype","headers":[{"id":" Custom doctypes","anchor":"custom-doctypes"}]},{"id":"elements","title":"Syntax: Elements","headers":[{"id":" Class names and ID's","anchor":"class-names-and-id-s"},{"id":" Attributes","anchor":"attributes"},{"id":" Text","anchor":"text"},{"id":" Nesting","anchor":"nesting"},{"id":" Multiline","anchor":"multiline"}]},{"id":"syntax","title":"Syntax","headers":[]},{"id":"text","title":"Syntax: Text","headers":[{"id":" Piped text","anchor":"piped-text"},{"id":" Inline in a Tag","anchor":"inline-in-a-tag"},{"id":" Block text","anchor":"block-text"}]}],"modules":[{"id":"Expug","title":"Expug","functions":[{"id":"build/2","anchor":"build/2"},{"id":"compile/2","anchor":"compile/2"},{"id":"stringify/2","anchor":"stringify/2"},{"id":"to_eex/2","anchor":"to_eex/2"},{"id":"to_eex!/2","anchor":"to_eex!/2"},{"id":"tokenize/2","anchor":"tokenize/2"}]},{"id":"Expug.Builder","title":"Expug.Builder","functions":[{"id":"add_closing/2","anchor":"add_closing/2"},{"id":"attributes/1","anchor":"attributes/1"},{"id":"build/2","anchor":"build/2"},{"id":"children/2","anchor":"children/2"},{"id":"element/2","anchor":"element/2"},{"id":"make/2","anchor":"make/2"},{"id":"put/3","anchor":"put/3"},{"id":"put_collapse/2","anchor":"put_collapse/2"},{"id":"put_last/2","anchor":"put_last/2"},{"id":"put_last_no_space/2","anchor":"put_last_no_space/2"},{"id":"self_closable?/1","anchor":"self_closable?/1"},{"id":"self_closing_element/2","anchor":"self_closing_element/2"},{"id":"str_join/3","anchor":"str_join/3"},{"id":"update_line_count/3","anchor":"update_line_count/3"},{"id":"valueify/2","anchor":"valueify/2"}]},{"id":"Expug.Compiler","title":"Expug.Compiler","functions":[{"id":"add_attribute/3","anchor":"add_attribute/3"},{"id":"add_child/2","anchor":"add_child/2"},{"id":"add_element/4","anchor":"add_element/4"},{"id":"attribute/1","anchor":"attribute/1"},{"id":"compile/2","anchor":"compile/2"},{"id":"document/1","anchor":"document/1"},{"id":"element/3","anchor":"element/3"},{"id":"indent/2","anchor":"indent/2"},{"id":"statement/2","anchor":"statement/2"},{"id":"subindent/1","anchor":"subindent/1"},{"id":"subindent_capture/2","anchor":"subindent_capture/2"}]},{"id":"Expug.ExpressionTokenizer","title":"Expug.ExpressionTokenizer","functions":[{"id":"balanced_braces/1","anchor":"balanced_braces/1"},{"id":"balanced_brackets/1","anchor":"balanced_brackets/1"},{"id":"balanced_pairs/3","anchor":"balanced_pairs/3"},{"id":"balanced_parentheses/1","anchor":"balanced_parentheses/1"},{"id":"double_quote_string/1","anchor":"double_quote_string/1"},{"id":"expression/2","anchor":"expression/2"},{"id":"expression_fragment/1","anchor":"expression_fragment/1"},{"id":"expression_term/1","anchor":"expression_term/1"},{"id":"expression_term_inside/1","anchor":"expression_term_inside/1"},{"id":"single_quote_string/1","anchor":"single_quote_string/1"}]},{"id":"Expug.Runtime","title":"Expug.Runtime","functions":[{"id":"attr/2","anchor":"attr/2"},{"id":"attr_value/1","anchor":"attr_value/1"}]},{"id":"Expug.Stringifier","title":"Expug.Stringifier","functions":[{"id":"newlines/1","anchor":"newlines/1"},{"id":"stringify/2","anchor":"stringify/2"}]},{"id":"Expug.Tokenizer","title":"Expug.Tokenizer","functions":[{"id":"attribute/1","anchor":"attribute/1"},{"id":"attribute_brace/1","anchor":"attribute_brace/1"},{"id":"attribute_bracket/1","anchor":"attribute_bracket/1"},{"id":"attribute_equal/1","anchor":"attribute_equal/1"},{"id":"attribute_key/1","anchor":"attribute_key/1"},{"id":"attribute_list/1","anchor":"attribute_list/1"},{"id":"attribute_paren/1","anchor":"attribute_paren/1"},{"id":"attribute_separator/1","anchor":"attribute_separator/1"},{"id":"attribute_value/1","anchor":"attribute_value/1"},{"id":"attributes_block/1","anchor":"attributes_block/1"},{"id":"block_text/1","anchor":"block_text/1"},{"id":"buffered_text/1","anchor":"buffered_text/1"},{"id":"doctype/1","anchor":"doctype/1"},{"id":"document/1","anchor":"document/1"},{"id":"element/1","anchor":"element/1"},{"id":"element_class/1","anchor":"element_class/1"},{"id":"element_class_or_id/1","anchor":"element_class_or_id/1"},{"id":"element_class_or_id_list/1","anchor":"element_class_or_id_list/1"},{"id":"element_descriptor/1","anchor":"element_descriptor/1"},{"id":"element_descriptor_full/1","anchor":"element_descriptor_full/1"},{"id":"element_id/1","anchor":"element_id/1"},{"id":"element_name/1","anchor":"element_name/1"},{"id":"element_or_text/1","anchor":"element_or_text/1"},{"id":"get_indent/1","anchor":"get_indent/1"},{"id":"get_next_indent/1","anchor":"get_next_indent/1"},{"id":"get_next_indent/2","anchor":"get_next_indent/2"},{"id":"html_comment/1","anchor":"html_comment/1"},{"id":"indent/1","anchor":"indent/1"},{"id":"line_comment/1","anchor":"line_comment/1"},{"id":"newlines/1","anchor":"newlines/1"},{"id":"optional_whitespace/1","anchor":"optional_whitespace/1"},{"id":"optional_whitespace_or_newline/1","anchor":"optional_whitespace_or_newline/1"},{"id":"raw_text/1","anchor":"raw_text/1"},{"id":"sole_buffered_text/1","anchor":"sole_buffered_text/1"},{"id":"sole_raw_text/1","anchor":"sole_raw_text/1"},{"id":"statement/1","anchor":"statement/1"},{"id":"subindent/2","anchor":"subindent/2"},{"id":"subindent_block/1","anchor":"subindent_block/1"},{"id":"tokenize/2","anchor":"tokenize/2"},{"id":"whitespace/1","anchor":"whitespace/1"},{"id":"whitespace_or_newline/1","anchor":"whitespace_or_newline/1"}]},{"id":"Expug.TokenizerTools","title":"Expug.TokenizerTools","functions":[{"id":"append/2","anchor":"append/2"},{"id":"convert_positions/2","anchor":"convert_positions/2"},{"id":"discard/3","anchor":"discard/3"},{"id":"eat/2","anchor":"eat/2"},{"id":"eat/3","anchor":"eat/3"},{"id":"eat/4","anchor":"eat/4"},{"id":"finalize/1","anchor":"finalize/1"},{"id":"get_parse_errors/1","anchor":"get_parse_errors/1"},{"id":"many_of/2","anchor":"many_of/2"},{"id":"many_of/3","anchor":"many_of/3"},{"id":"one_of/3","anchor":"one_of/3"},{"id":"optional/2","anchor":"optional/2"},{"id":"optional_many_of/2","anchor":"optional_many_of/2"},{"id":"run/3","anchor":"run/3"},{"id":"scrub_parse_errors/1","anchor":"scrub_parse_errors/1"},{"id":"start_empty/2","anchor":"start_empty/2"}]},{"id":"Expug.TokenizerTools.State","title":"Expug.TokenizerTools.State"},{"id":"Expug.Transformer","title":"Expug.Transformer","functions":[{"id":"clause_after/1","anchor":"clause_after/1"},{"id":"close_clause/2","anchor":"close_clause/2"},{"id":"close_clauses/1","anchor":"close_clauses/1"},{"id":"prelude/1","anchor":"prelude/1"},{"id":"transform/1","anchor":"transform/1"}]},{"id":"Expug.Visitor","title":"Expug.Visitor","functions":[{"id":"visit/2","anchor":"visit/2"},{"id":"visit_children/2","anchor":"visit_children/2"}]}],"protocols":[]}