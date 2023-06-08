import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'cdaee34695a54f14be21c97f3abdcdbd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
