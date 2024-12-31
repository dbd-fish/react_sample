import { http, HttpResponse } from 'msw';

// ユーザー情報のモックデータ
const MOCK_USER = {
  username: 'mockuser',
  email: 'mockuser@example.com',
};

// /api/get/me エンドポイントへのgetリクエストを処理するハンドラー
export const getMeHandler = http.get('/api/get/me', ({ cookies }) => {
  console.log('/api/get/me Cookies:', cookies);

  // NOTE: 本来はCookieからJWTを取得する
  // const authToken = cookies['authToken'];
  // if (!authToken) {
  //   // JWTが存在しない場合はエラーレスポンスを返す
  //   console.log('/api/get/me authToken');
  //   return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
  // }

  const authToken = 'your_jwt_token'

  // JWTのバリデーション（簡略化）
  if (authToken === 'your_jwt_token') {
    console.log('/api/get/me jwt yes', authToken);
    return HttpResponse.json(MOCK_USER, { status: 200 });
  } else {
    console.log('/api/get/me jwt', authToken);
    return HttpResponse.json({ message: 'Invalid token' }, { status: 403 });
  }
});