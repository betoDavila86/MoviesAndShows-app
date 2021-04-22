import retrievePopularMovies from './retrieve-popular-movies'

describe('retrievePopularMovies', () => {
    describe('asynchronous happy path', () => {
        it('should succeed on retrieving the popular movies', async () => {
            return retrievePopularMovies()
            .then(results => {
                expect(results).toBeDefined();
                expect(results).toBeInstanceOf(Array);
                expect(results.length).toBeGreaterThan(0);
                expect(results).toHaveLength(20)
            });
        });

        // it('should fail on retrieving the popular movies ', async () => {

        // });

    });
})
