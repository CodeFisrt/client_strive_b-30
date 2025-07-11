import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('clientToken');
  if (token != null) {
    const cloneRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    debugger;
    return next(cloneRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        debugger;
        if (error.status == 401) {
          alert("Please Send token")
        } else if (error.status == 500) {
          alert('API Issue')
        } else if (error.status == 400) {
          alert('Check your Payload')
        }
        return throwError(() => error);
      }),
      map((res: any) => {
        debugger;
        return res;
      })
    );
  } else {
    return next(req)
  }

};
