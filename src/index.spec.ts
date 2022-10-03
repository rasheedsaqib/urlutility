import UrlUtility from './index';

describe('Tests for Url Utility', () => {
    it("should parse url with default params", () => {
        const urlUtility = new UrlUtility();
        const parsedUrl = urlUtility.parse("https://www.google.com:443/search?q=hello#test");
        expect(parsedUrl).toEqual("https://www.google.com/search");
    })

    it('should check ignoreProtocol', () => {
        const urlUtility = new UrlUtility({ignoreProtocol: true});
        const parsedUrl = urlUtility.parse('https://www.google.com');
        expect(parsedUrl).toBe('www.google.com');
    });

    it('should check ignorePort', () => {
        const urlUtility = new UrlUtility({ignorePort: false});
        const parsedUrl = urlUtility.parse('https://www.google.com:8080');
        expect(parsedUrl).toBe('https://www.google.com:8080');
    })

    it('should check ignorePath', () => {
        const urlUtility = new UrlUtility({ignorePath: true});
        const parsedUrl = urlUtility.parse('https://www.google.com/test');
        expect(parsedUrl).toBe('https://www.google.com');
    })

    it('should check ignoreQuery', () => {
        const urlUtility = new UrlUtility({ignoreQuery: true});
        const parsedUrl = urlUtility.parse('https://www.google.com/test?query=1');
        expect(parsedUrl).toBe('https://www.google.com/test');
    })

    it('should check ignoreHash', () => {
        const urlUtility = new UrlUtility({ignoreFragment: false});
        const parsedUrl = urlUtility.parse('https://www.google.com/test#hash');
        expect(parsedUrl).toBe('https://www.google.com/test#hash');
    })

    it('should check ignoreUsername', () => {
        const urlUtility = new UrlUtility({ignoreUsernameAndPassword: true});
        const parsedUrl = urlUtility.parse('https://username@www.google.com/test');
        expect(parsedUrl).toBe('https://www.google.com/test');
    })

    it('should check ignoreUsername', () => {
        const urlUtility = new UrlUtility({ignoreUsernameAndPassword: false});
        const parsedUrl = urlUtility.parse('https://username@www.google.com/test');
        expect(parsedUrl).toBe('https://username@www.google.com/test');
    })

    it('should check ignoreTrailingSlash', () => {
        const urlUtility = new UrlUtility({ignoreTrailingSlash: true});
        const parsedUrl = urlUtility.parse('https://www.google.com/test/');
        expect(parsedUrl).toBe('https://www.google.com/test');
    })

    it('should check ignoreCase', () => {
        const urlUtility = new UrlUtility({toLowerCase: true});
        const parsedUrl = urlUtility.parse('https://www.google.com/test');
        expect(parsedUrl).toBe('https://www.google.com/test');
    })

    it("should compare url with default params", () => {
        const urlUtility = new UrlUtility();
        const parsedUrl = urlUtility.compare("https://www.google.com:443/search?q=hello#test", "https://www.google.com/search");
        expect(parsedUrl).toBe(true);
    })
})
