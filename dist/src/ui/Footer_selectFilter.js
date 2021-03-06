/**
 * @license
 * Copyright BuilderIO All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
import { injectEventHandler, provideEntity, provideEvent } from '../qwik.js';
import { TodoEntity } from '../data/Todo.js';
export default injectEventHandler(
//
null, provideEntity(TodoEntity.MOCK_USER), provideEvent(), function (todos, event) {
    todos.setFilter(event.filter);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdGVyX3NlbGVjdEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsic3JjL3VpL0Zvb3Rlcl9zZWxlY3RGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLGVBQWUsa0JBQWtCO0FBQy9CLEVBQUU7QUFDRixJQUFJLEVBQ0osYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFDbkMsWUFBWSxFQUFFLEVBQ2QsVUFBVSxLQUFpQixFQUFFLEtBQVk7SUFDdkMsS0FBSyxDQUFDLFNBQVMsQ0FBRSxLQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQnVpbGRlcklPIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL0J1aWxkZXJJTy9xd2lrL2Jsb2IvbWFpbi9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgaW5qZWN0RXZlbnRIYW5kbGVyLCBwcm92aWRlRW50aXR5LCBwcm92aWRlRXZlbnQgfSBmcm9tICcuLi9xd2lrLmpzJztcbmltcG9ydCB7IFRvZG9FbnRpdHkgfSBmcm9tICcuLi9kYXRhL1RvZG8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RFdmVudEhhbmRsZXIoXG4gIC8vXG4gIG51bGwsXG4gIHByb3ZpZGVFbnRpdHkoVG9kb0VudGl0eS5NT0NLX1VTRVIpLFxuICBwcm92aWRlRXZlbnQoKSxcbiAgZnVuY3Rpb24gKHRvZG9zOiBUb2RvRW50aXR5LCBldmVudDogRXZlbnQpIHtcbiAgICB0b2Rvcy5zZXRGaWx0ZXIoKGV2ZW50IGFzIGFueSkuZmlsdGVyKTtcbiAgfVxuKTtcbiJdfQ==