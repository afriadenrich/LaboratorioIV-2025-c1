import { HttpInterceptorFn } from '@angular/common/http';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const clone = req.clone({headers: req.headers.append("Authorization", "Bearer eyj-.l.-.-.--.-")});

  return next(clone);
};
