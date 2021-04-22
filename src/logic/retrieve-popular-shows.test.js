import retrievePopularShows from './retrieve-popular-shows'

describe('retrievePopularShows', () => {
    describe('asynchronous happy path', () => {
        it('should succeed on retrieving the popular shows', async () => {
            const results = await retrievePopularShows();

            expect(results).toBeDefined();
            expect(results).toBeInstanceOf(Array);
            expect(results.length).toBeGreaterThan(0);
            expect(results).toHaveLength(20)
        });

        // it('should fail on retrieving the popular shows ', async () => {

        // });

    });
})
