import retrieveDetail from './retrieve-detail';

describe('retrieveDetail', () => {
    describe('asynchronous happy path', () => {
        let id, type;

        beforeEach(() => {
            type = ['movie', 'tv'][Math.floor(Math.random() * ['movie', 'tv'].length)];
            id = [412656, 527774, 664767, 458576, 793723, 634528, 587996][Math.floor(Math.random() * [412656, 527774, 664767, 458576, 793723, 634528, 587996].length)];
        })

        it('should succeed on retrieving the movie or show detail', async () => {
            const data = await retrieveDetail(type, id)

            expect(data).toBeDefined();
            expect(data).toBeInstanceOf(Object);
            expect(data.id).toEqual(id);
            expect(data.overview).toBeDefined();
            expect(data.poster_path).toBeDefined();

        });

    });

    describe('synchronous path', () => {
        let id, type;

        beforeEach(() => {
            type = ['movies', 'show'][Math.floor(Math.random() * ['movies', 'show'].length)];
            id = ['sdfsd', {}, [23423, 23532], () => { }][Math.floor(Math.random() * ['sdfsd', {}, [23423, 23532], () => { }].length)];
        })

        it('should succeed on retrieving the movie or show detail', async () => {
            const data = await retrieveDetail(type, id)
            
            expect(data).toBeDefined();
            expect(data).toBeInstanceOf(TypeError)
        });

    });
})
