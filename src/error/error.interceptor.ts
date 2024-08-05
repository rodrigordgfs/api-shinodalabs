import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        console.log(err);
        switch (err.response?.statusCode) {
          case 400:
            return throwError(
              () => new BadRequestException(err.response.message),
            );
          case 404:
            return throwError(
              () => new NotFoundException('Registro não encontrado.'),
            );
          case 409:
            return throwError(
              () => new ConflictException(err.response.message),
            );
        }
        return throwError(() => new BadGatewayException('Erro inesperado.'));
      }),
    );
  }
}
