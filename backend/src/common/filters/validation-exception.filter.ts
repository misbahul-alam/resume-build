import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const res: any = exception.getResponse();
    let errors: { field: string; message: string }[] = [];

    if (res.message && Array.isArray(res.message)) {
      // Nest sends validation errors in array (class-validator)
      errors = res.message.map((msg: string) => {
        const [field, ...rest] = msg.split(' ');
        return {
          field,
          message: rest.join(' '),
        };
      });
    } else {
      errors = [
        { field: 'unknown', message: res.message || 'Validation error' },
      ];
    }

    response.status(400).json({
      statusCode: 400,
      errors,
    });
  }
}
