/**
 * @license
 * Copyright BuilderIO All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
import { jsxFactory, QRL, injectMethod } from '../qwik.js';
import { HeaderComponent } from './Header_component.js';
export const _needed_by_JSX_ = jsxFactory; // eslint-disable-line @typescript-eslint/no-unused-vars
export default injectMethod(HeaderComponent, //
function () {
    return (jsxFactory(null, null,
        jsxFactory("h1", null, "todos"),
        jsxFactory("input", { class: "new-todo", placeholder: "What needs to be done??", autofocus: true, value: this.$state.text, "on:keyup": QRL `ui:/Header_addTodo#?value=.target.value&code=.code` })));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyX3RlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJzcmMvdWkvSGVhZGVyX3RlbXBsYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsQ0FBQyx3REFBd0Q7QUFDbkcsZUFBZSxZQUFZLENBQ3pCLGVBQWUsRUFBRSxFQUFFO0FBQ25CO0lBQ0UsT0FBTyxDQUNMO1FBQ0UsK0JBQWM7UUFDZCxzQkFDRSxLQUFLLEVBQUMsVUFBVSxFQUNoQixXQUFXLEVBQUMseUJBQXlCLEVBQ3JDLFNBQVMsUUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGNBQ2IsR0FBRyxDQUFBLG9EQUFvRCxHQUNqRSxDQUNELENBQ0osQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEJ1aWxkZXJJTyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9CdWlsZGVySU8vcXdpay9ibG9iL21haW4vTElDRU5TRVxuICovXG5cbmltcG9ydCB7IGpzeEZhY3RvcnksIFFSTCwgaW5qZWN0TWV0aG9kIH0gZnJvbSAnLi4vcXdpay5qcyc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL0hlYWRlcl9jb21wb25lbnQuanMnO1xuXG5leHBvcnQgY29uc3QgX25lZWRlZF9ieV9KU1hfID0ganN4RmFjdG9yeTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IGluamVjdE1ldGhvZChcbiAgSGVhZGVyQ29tcG9uZW50LCAvL1xuICBmdW5jdGlvbiAodGhpczogSGVhZGVyQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzPVwibmV3LXRvZG9cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lPz9cIlxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIHZhbHVlPXt0aGlzLiRzdGF0ZS50ZXh0fVxuICAgICAgICAgIG9uOmtleXVwPXtRUkxgdWk6L0hlYWRlcl9hZGRUb2RvIz92YWx1ZT0udGFyZ2V0LnZhbHVlJmNvZGU9LmNvZGVgfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuKTtcbiJdfQ==