import { Response } from 'express';

class ErrorHelper {
  public errorHandler(res: Response, error: Error) {
    return res.status(500).json({
      success: false,
      message: error.message ? error.message : error,
    });
  }
}

export default new ErrorHelper();
