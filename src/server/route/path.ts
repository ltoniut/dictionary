import {Ipath, IPathRoute} from '../domain/IPath';

function path(url: string): IPathRoute {
    const allRoutes: Ipath = {
        '/hash': {
            methods: ['GET']
        }
    }
    return allRoutes[url];
}

export default path;
