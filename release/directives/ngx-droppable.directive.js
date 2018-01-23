import { Directive, Input, Output, OnInit, OnDestroy, AfterViewInit, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { DrakeStoreService } from '../services/drake-store.service';
var i = 10000;
function getNextId() {
    return i++;
}
/**
 * Makes the container droppable and children draggable.
 *
 * @export
 * @class DroppableDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {AfterViewInit}
 */
var /**
 * Makes the container droppable and children draggable.
 *
 * @export
 * @class DroppableDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {AfterViewInit}
 */
DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el, renderer, drakesService) {
        this.el = el;
        this.renderer = renderer;
        this.drakesService = drakesService;
    }
    Object.defineProperty(DroppableDirective.prototype, "container", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableDirective.prototype, "dropZone", {
        get: function () {
            return this._dropZone || this.ngxDroppable || this.defaultZone;
        },
        set: function (val) {
            this._dropZone = val;
        },
        enumerable: true,
        configurable: true
    });
    DroppableDirective.prototype.ngOnInit = function () {
        this.defaultZone = "@@DefaultDropZone-" + getNextId() + "@@";
        this.drakesService.register(this);
    };
    DroppableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.over.subscribe(function () {
            _this.renderer.addClass(_this.container, 'gu-over');
        });
        this.out.subscribe(function () {
            _this.renderer.removeClass(_this.container, 'gu-over');
        });
    };
    DroppableDirective.prototype.ngOnDestroy = function () {
        this.drakesService.remove(this);
    };
    return DroppableDirective;
}());
/**
 * Makes the container droppable and children draggable.
 *
 * @export
 * @class DroppableDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {AfterViewInit}
 */
export { DroppableDirective };
//# sourceMappingURL=ngx-droppable.directive.js.map