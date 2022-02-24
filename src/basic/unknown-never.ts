let input: unknown;
let username: string;

input = 5;
input = 'Max';

if (typeof input === 'string') {
  input = username;
}

function generateError(message: string, code: number): never {
  throw { message, statusCode: code };
}

generateError('서버 내부 오류', 500);
