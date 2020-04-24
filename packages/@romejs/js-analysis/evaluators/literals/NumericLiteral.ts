/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope} from '../../scopes';
import {AnyNode, NumericLiteral, numericLiteral} from '@romejs/js-ast';
import NumericLiteralT from '../../types/NumericLiteralT';

export default function NumericLiteral(node: AnyNode, scope: Scope) {
  node = numericLiteral.assert(node);
  return new NumericLiteralT(scope, node, node.value);
}
