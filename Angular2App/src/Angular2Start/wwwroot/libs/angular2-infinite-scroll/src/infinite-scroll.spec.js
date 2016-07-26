"use strict";
var testing_1 = require('@angular/core/testing');
var infinite_scroll_1 = require('./infinite-scroll');
var core_1 = require('@angular/core');
testing_1.describe('Infinite Scroll Directive', function () {
    var createMockElement = function () {
        var mockedElement = new core_1.ElementRef(document.createElement('div'));
        return mockedElement;
    };
    testing_1.it('should create an instance of the directive', function () {
        var mockedElement = createMockElement();
        var actual = new infinite_scroll_1.InfiniteScroll(mockedElement);
        testing_1.expect(actual).toBeDefined();
    });
    testing_1.it('should have default @Input properties values', function () {
        var mockedElement = createMockElement();
        var directive = new infinite_scroll_1.InfiniteScroll(mockedElement);
        var expectedInputs = [
            '_distanceDown',
            '_distanceUp',
            '_throttle',
            'scrollWindow',
            '_immediate'
        ];
        expectedInputs.forEach(function (actualInput) {
            return testing_1.expect(directive[actualInput]).toBeDefined();
        });
    });
    testing_1.it('should trigger the onScrollDown event when scroll has passed _distandDown', function () {
        var mockedElement = createMockElement();
        var directive = new infinite_scroll_1.InfiniteScroll(mockedElement);
        spyOn(directive, 'onScrollDown');
        directive.ngOnInit();
        spyOn(directive.scroller, 'calculatePoints').and.callFake(function () {
            return { height: 150, scrolledUntilNow: 75, totalToScroll: 150 };
        });
        directive.scroller.handler();
        testing_1.expect(directive.scroller.calculatePoints).toHaveBeenCalled();
        testing_1.expect(directive.onScrollDown).toHaveBeenCalled();
    });
    testing_1.it('should trigger the onScrollUp event when scroll has passed _distanceUp', function () {
        var mockedElement = createMockElement();
        var directive = new infinite_scroll_1.InfiniteScroll(mockedElement);
        spyOn(directive, 'onScrollUp');
        directive.ngOnInit();
        spyOn(directive.scroller, 'calculatePoints').and.callFake(function () {
            return { height: 150, scrolledUntilNow: 30, totalToScroll: 150 };
        });
        directive.scroller.lastScrollPosition = 50;
        directive.scroller.handler();
        testing_1.expect(directive.scroller.calculatePoints).toHaveBeenCalled();
        testing_1.expect(directive.onScrollUp).toHaveBeenCalled();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZpbml0ZS1zY3JvbGwuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0JBU08sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0Msa0JBQVEsQ0FBQywyQkFBMkIsRUFBRTtJQUNwQyxJQUFNLGlCQUFpQixHQUFHO1FBQ3hCLElBQU0sYUFBYSxHQUFlLElBQUksaUJBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEYsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFRixZQUFFLENBQUMsNENBQTRDLEVBQUU7UUFDL0MsSUFBTSxhQUFhLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGdDQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUVILFlBQUUsQ0FBQyw4Q0FBOEMsRUFBRTtRQUNqRCxJQUFNLGFBQWEsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFDLElBQU0sU0FBUyxHQUFHLElBQUksZ0NBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxJQUFNLGNBQWMsR0FBRztZQUNyQixlQUFlO1lBQ2YsYUFBYTtZQUNiLFdBQVc7WUFDWCxjQUFjO1lBQ2QsWUFBWTtTQUNiLENBQUM7UUFDRixjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsV0FBVztZQUNoQyxPQUFBLGdCQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFO1FBQTVDLENBQTRDLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztJQUVILFlBQUUsQ0FBQywyRUFBMkUsRUFBRTtRQUM5RSxJQUFNLGFBQWEsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFDLElBQU0sU0FBUyxHQUFHLElBQUksZ0NBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxLQUFLLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQixLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDeEQsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixnQkFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5RCxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0lBRUgsWUFBRSxDQUFDLHdFQUF3RSxFQUFFO1FBQzNFLElBQU0sYUFBYSxHQUFHLGlCQUFpQixFQUFFLENBQUM7UUFDMUMsSUFBTSxTQUFTLEdBQUcsSUFBSSxnQ0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELEtBQUssQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDL0IsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUMzQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLGdCQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlELGdCQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGlpdCxcbiAgaXQsXG4gIGRkZXNjcmliZSxcbiAgZGVzY3JpYmUsXG4gIGV4cGVjdCxcbiAgYXN5bmMsXG4gIGluamVjdCxcbiAgYmVmb3JlRWFjaFByb3ZpZGVyc1xufSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGwgfSBmcm9tICcuL2luZmluaXRlLXNjcm9sbCc7IFxuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyBcblxuZGVzY3JpYmUoJ0luZmluaXRlIFNjcm9sbCBEaXJlY3RpdmUnLCAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZU1vY2tFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vY2tlZEVsZW1lbnQ6IEVsZW1lbnRSZWYgPSBuZXcgRWxlbWVudFJlZihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgcmV0dXJuIG1vY2tlZEVsZW1lbnQ7XG4gIH07XG4gIFxuICBpdCgnc2hvdWxkIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgZGlyZWN0aXZlJywgKCkgPT4ge1xuICAgIGNvbnN0IG1vY2tlZEVsZW1lbnQgPSBjcmVhdGVNb2NrRWxlbWVudCgpO1xuICAgIGNvbnN0IGFjdHVhbCA9IG5ldyBJbmZpbml0ZVNjcm9sbChtb2NrZWRFbGVtZW50KTtcbiAgICBleHBlY3QoYWN0dWFsKS50b0JlRGVmaW5lZCgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGhhdmUgZGVmYXVsdCBASW5wdXQgcHJvcGVydGllcyB2YWx1ZXMnLCAoKSA9PiB7XG4gICAgY29uc3QgbW9ja2VkRWxlbWVudCA9IGNyZWF0ZU1vY2tFbGVtZW50KCk7XG4gICAgY29uc3QgZGlyZWN0aXZlID0gbmV3IEluZmluaXRlU2Nyb2xsKG1vY2tlZEVsZW1lbnQpO1xuICAgIGNvbnN0IGV4cGVjdGVkSW5wdXRzID0gW1xuICAgICAgJ19kaXN0YW5jZURvd24nLFxuICAgICAgJ19kaXN0YW5jZVVwJyxcbiAgICAgICdfdGhyb3R0bGUnLFxuICAgICAgJ3Njcm9sbFdpbmRvdycsXG4gICAgICAnX2ltbWVkaWF0ZSdcbiAgICBdO1xuICAgIGV4cGVjdGVkSW5wdXRzLmZvckVhY2goYWN0dWFsSW5wdXQgPT5cbiAgICAgIGV4cGVjdChkaXJlY3RpdmVbYWN0dWFsSW5wdXRdKS50b0JlRGVmaW5lZCgpKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCB0cmlnZ2VyIHRoZSBvblNjcm9sbERvd24gZXZlbnQgd2hlbiBzY3JvbGwgaGFzIHBhc3NlZCBfZGlzdGFuZERvd24nLCAoKSA9PiB7XG4gICAgY29uc3QgbW9ja2VkRWxlbWVudCA9IGNyZWF0ZU1vY2tFbGVtZW50KCk7XG4gICAgY29uc3QgZGlyZWN0aXZlID0gbmV3IEluZmluaXRlU2Nyb2xsKG1vY2tlZEVsZW1lbnQpO1xuICAgIHNweU9uKGRpcmVjdGl2ZSwgJ29uU2Nyb2xsRG93bicpO1xuICAgIGRpcmVjdGl2ZS5uZ09uSW5pdCgpO1xuICAgIHNweU9uKGRpcmVjdGl2ZS5zY3JvbGxlciwgJ2NhbGN1bGF0ZVBvaW50cycpLmFuZC5jYWxsRmFrZSgoKSA9PiB7XG4gICAgICByZXR1cm4geyBoZWlnaHQ6IDE1MCwgc2Nyb2xsZWRVbnRpbE5vdzogNzUsIHRvdGFsVG9TY3JvbGw6IDE1MCB9O1xuICAgIH0pO1xuICAgIGRpcmVjdGl2ZS5zY3JvbGxlci5oYW5kbGVyKCk7XG4gICAgZXhwZWN0KGRpcmVjdGl2ZS5zY3JvbGxlci5jYWxjdWxhdGVQb2ludHMpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICBleHBlY3QoZGlyZWN0aXZlLm9uU2Nyb2xsRG93bikudG9IYXZlQmVlbkNhbGxlZCgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHRyaWdnZXIgdGhlIG9uU2Nyb2xsVXAgZXZlbnQgd2hlbiBzY3JvbGwgaGFzIHBhc3NlZCBfZGlzdGFuY2VVcCcsICgpID0+IHtcbiAgICBjb25zdCBtb2NrZWRFbGVtZW50ID0gY3JlYXRlTW9ja0VsZW1lbnQoKTtcbiAgICBjb25zdCBkaXJlY3RpdmUgPSBuZXcgSW5maW5pdGVTY3JvbGwobW9ja2VkRWxlbWVudCk7XG4gICAgc3B5T24oZGlyZWN0aXZlLCAnb25TY3JvbGxVcCcpO1xuICAgIGRpcmVjdGl2ZS5uZ09uSW5pdCgpO1xuICAgIHNweU9uKGRpcmVjdGl2ZS5zY3JvbGxlciwgJ2NhbGN1bGF0ZVBvaW50cycpLmFuZC5jYWxsRmFrZSgoKSA9PiB7XG4gICAgICByZXR1cm4geyBoZWlnaHQ6IDE1MCwgc2Nyb2xsZWRVbnRpbE5vdzogMzAsIHRvdGFsVG9TY3JvbGw6IDE1MCB9O1xuICAgIH0pO1xuICAgIGRpcmVjdGl2ZS5zY3JvbGxlci5sYXN0U2Nyb2xsUG9zaXRpb24gPSA1MDtcbiAgICBkaXJlY3RpdmUuc2Nyb2xsZXIuaGFuZGxlcigpO1xuICAgIGV4cGVjdChkaXJlY3RpdmUuc2Nyb2xsZXIuY2FsY3VsYXRlUG9pbnRzKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgZXhwZWN0KGRpcmVjdGl2ZS5vblNjcm9sbFVwKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gIH0pO1xufSkiXX0=