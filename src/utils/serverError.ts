import axios from 'axios';

interface ServerErrorData {
  success: boolean;
  response: unknown;
  error: string;
}

// eslint-disable-next-line import/prefer-default-export
export const getErrorMsg = (serverError: unknown) => {
  if (axios.isAxiosError<ServerErrorData>(serverError)) {
    return serverError.response?.data.error;
  }
  return null;
};
