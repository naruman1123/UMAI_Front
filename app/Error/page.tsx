'use client';
import { useRouter } from 'next/navigation';

export default function Custom404() {
    const router = useRouter();
    router.push(`/login`);
    return <h1>メールアドレスまたはパスワードが間違っています</h1>;
  }