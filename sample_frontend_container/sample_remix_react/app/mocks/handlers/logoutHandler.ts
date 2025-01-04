// MSW（Mock Service Worker）から必要なモジュールをインポート
import { http, HttpResponse } from 'msw';

// /api/logout エンドポイントへのPOSTリクエストを処理するハンドラーを定義
export const logoutHandler = http.post(
  'http://localhost:5173/api/logout',
  async () => {
    try {
      // TODO: HTTP-only-Cookie内のJWTを削除する処理を実装

      // 成功レスポンスを返す
      return new HttpResponse(
        // レスポンスボディとしてJSON形式のメッセージを設定
        JSON.stringify({ message: 'Logout successfully' }),
        {
          // HTTPステータスコードを200（OK）に設定
          status: 200,
          headers: {
            'Content-Type': 'application/json', // レスポンスの内容がJSONであることを示す
          },
        },
      );
    } catch (error) {
      // リクエストボディのパース中にエラーが発生した場合の処理
      console.error('Error parsing request body:', error);

      // エラーレスポンスを返す
      return new HttpResponse(
        JSON.stringify({ message: 'Invalid request body' }),
        {
          status: 400, // HTTPステータスコードを400（Bad Request）に設定
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }
  },
);