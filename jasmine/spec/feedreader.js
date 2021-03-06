/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


$(function() {
    /* This is first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL defined', function() {
            allFeeds.forEach(function(rssfeed) {
                expect(rssfeed.url).toBeDefined();
                expect(rssfeed.url.length).not.toBe(0);
            });
        });

        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name defined', function() {
            allFeeds.forEach(function(rssfeed) {
                expect(rssfeed.name).toBeDefined();
                expect(rssfeed.name.length).not.toBe(0);
            });
        });
    });


    /* Here is a test suite named "The menu" */

    describe ('The menu', function () {

        /* This test ensures the menu element is
         * hidden by default. 
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: the menu displays when
          * clicked and hides when clicked again.
          */
        it('should display and hide when clicked', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBeTruthy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });      

    /* Here is a test suite named "Initial Entries" */
    describe ('Initial Entries', function () {


        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            $('.feed').empty;
            loadFeed(1, function() {
                done();
            });
        });

        it('there is at least a single .entry element within .feed container after loadFeed()', function() {
            var entries = $('.feed').find('.entry');
            var entryLength = entries.length;
            expect(entryLength).toBeGreaterThan(0);
        });

    });

    /* Here is a test suite named "New Feed Selection" */

    describe ('New Feed Selection', function () {

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var current;
        beforeEach(function(done) {
            current = $('.feed').html();
            loadFeed(2, function() {
                done();
            });
        });
       
        it('Loading new feed when loadFeed() is called', function() {
            var newCurrent = $('.feed').html();
            expect(current).not.toEqual(newCurrent);
        });

    });

}());
