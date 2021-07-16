/**
 * @license
 * Copyright BuilderIO All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
import { TodoEntity } from '../data/Todo.js';
import { injectEventHandler, provideEntity } from '../qwik.js';
/**
 * @fileoverview
 *
 */
/**
 */
export default injectEventHandler(null, provideEntity(TodoEntity.MOCK_USER), async function (todoEntity) {
    await todoEntity.archive();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdGVyX2FyY2hpdmUuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInNyYy91aS9Gb290ZXJfYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUvRDs7O0dBR0c7QUFFSDtHQUNHO0FBQ0gsZUFBZSxrQkFBa0IsQ0FDL0IsSUFBSSxFQUNKLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQ25DLEtBQUssV0FBVyxVQUFzQjtJQUNwQyxNQUFNLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBCdWlsZGVySU8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vQnVpbGRlcklPL3F3aWsvYmxvYi9tYWluL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBUb2RvRW50aXR5IH0gZnJvbSAnLi4vZGF0YS9Ub2RvLmpzJztcbmltcG9ydCB7IGluamVjdEV2ZW50SGFuZGxlciwgcHJvdmlkZUVudGl0eSB9IGZyb20gJy4uL3F3aWsuanMnO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqXG4gKi9cblxuLyoqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGluamVjdEV2ZW50SGFuZGxlcihcbiAgbnVsbCxcbiAgcHJvdmlkZUVudGl0eShUb2RvRW50aXR5Lk1PQ0tfVVNFUiksXG4gIGFzeW5jIGZ1bmN0aW9uICh0b2RvRW50aXR5OiBUb2RvRW50aXR5KSB7XG4gICAgYXdhaXQgdG9kb0VudGl0eS5hcmNoaXZlKCk7XG4gIH1cbik7XG4iXX0=