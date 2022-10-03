import UrlUtility from './index';

describe('Tests for Url Utility', () => {
    it('should check ignoreProtocol', () => {
        const urlUtility = new UrlUtility({ignoreProtocol: true});
        const parsedUrl = urlUtility.parse('https://www.google.com');
        expect(parsedUrl).toBe('www.google.com');
    });

    it('should check ignorePort', () => {
        const urlUtility = new UrlUtility({ignorePort: true});
        const parsedUrl = urlUtility.parse('https://www.google.com:8080');
        expect(parsedUrl).toBe('https://www.google.com');
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
        const urlUtility = new UrlUtility({ignoreFragment: true});
        const parsedUrl = urlUtility.parse('https://www.google.com/test#hash');
        expect(parsedUrl).toBe('https://www.google.com/test');
    })

    it('should check ignoreUsername', () => {
        const urlUtility = new UrlUtility({ignoreUsername: true});
        const parsedUrl = urlUtility.parse('https://username@www.google.com/test');
        expect(parsedUrl).toBe('https://www.google.com/test');
    })

    it('should check ignorePassword', () => {
        const urlUtility = new UrlUtility({ignorePassword: true});
        const parsedUrl = urlUtility.parse('https://username:password@www.google.com/test');
        expect(parsedUrl).toBe('https://www.google.com/test');
    })

    it('should check ignoreTrailingSlash', () => {
        const urlUtility = new UrlUtility({ignoreTrailingSlash: true});
        const parsedUrl = urlUtility.parse('https://www.google.com/test/');
        expect(parsedUrl).toBe('https://www.google.com/test');
    })
})
