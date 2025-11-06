import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

// Modern standalone-style Angular interceptor
export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

    let token = localStorage.getItem('access_token');
    if(!token){
        localStorage.setItem('access_token','eyJraWQiOiJqZlBTQ2FheVBkV0ZvVVgrOENHUWJ1azk0bEtxMTVqWng3MW5vcm9NWnhFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MDFjNjk2Yy05MDYxLTcwNjktYTk1Ni03ZDg4YzIzZDc5NzkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzNJREJxaXJ4VyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjZxYnNrcGxtc2ZpcTY1ZjU0dW4wcXZhZjdjIiwib3JpZ2luX2p0aSI6Ijk0MjViNTQyLWUwMDItNDFlOC1hYjMxLTY0NzkyZWExMDgzZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoicGhvbmUgb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNzYyMzM5MTM0LCJleHAiOjE3NjIzNDI3MzQsImlhdCI6MTc2MjMzOTEzNCwianRpIjoiZDE0NzgzMDUtMDFjOS00NTNlLThhNDgtNjM4YWVkMzg4MGY5IiwidXNlcm5hbWUiOiI0MDFjNjk2Yy05MDYxLTcwNjktYTk1Ni03ZDg4YzIzZDc5NzkifQ.Q56qkAyhiZocvYP7rYxspZXVAqdQg1oEkkM1ks78AP4Xn6Bb7IZjzHSfOH44hfFNCYddXfdEa1cYTxlXXmXzR06Jb2oHQ_NF1e3OEjyEAhXS9u4Z_WkpY47XYlxoV0OeuQ2XC73zPJTOXd8gSEpBmFI9dqR7U7qH5SMcSQv7QOEKRBu_a7BaMz43ztVOi74oOyf9nj2pZ6YkeHUYCErIMp5f2qvgDpEckj7zLyACutN4ST_0yXgBlEIjqB66HFWL0Sk444w67K6LNModealkI1ccmdNl6JBZkN4tgmkFlCc8hlrFk1V-bzEA_ekwG4TpifFHkl7mBVClaou9N1l4kw'); // or from a service
    }

    token = localStorage.getItem('access_token');
    if (token) {
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next(cloned);
    }

    return next(req);
};
