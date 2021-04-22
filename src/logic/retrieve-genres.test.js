import retrieveGenres from './retrieve-genres'

describe('retrieveGenres', () => {
    describe('asynchronous happy path', () => {
        it('should succeed on retrieving the movie genres', async () => {
            return retrieveGenres()
            .then(genres => {
                expect(genres).toBeDefined();
                expect(genres).toBeInstanceOf(Array);
                expect(genres.length).toBeGreaterThan(0);
                expect(genres).toHaveLength(19)
            });
        });

        // it('should fail on retrieving the popular movies ', async () => {

        // });

    });
})
