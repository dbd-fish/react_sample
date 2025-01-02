// sample_frontend_container/sample_remix_react/app/utils/api.ts

/**
 * ユーザー情報を取得する非同期関数
 * - '/api/get/me' エンドポイントからユーザー情報を取得
 * - 成功時: ユーザー情報オブジェクトを返す
 * - 失敗時: エラーメッセージをスロー
 */
export const fetchUserData = async () => {
  console.log('fetchUserData: start'); // 関数開始時のログ

  const apiUrl = process.env.API_URL || 'http://localhost:5173'; // 環境変数からURLを取得
  console.log('fetchUserData: apiUrl', apiUrl); // API URLのログ
  const response = await fetch(`${apiUrl}/api/get/me`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // Cookieを送信
  });

  if (response.ok) {
    const data = await response.json();
    console.log('fetchUserData: success', data); // 成功時のログ
    return { username: data.username, email: data.email };
  } else {
    console.error('fetchUserData: error', response.status); // エラー時のログ
    throw new Error('Unauthorized');
  }
};