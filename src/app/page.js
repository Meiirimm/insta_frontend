'use client'
import { useState } from 'react';
import Test from '../components/test'
import Header from '../components/header'
import CreatePost from '@/components/create-post';

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <main >
      <Header setStep={setStep} />
      <CreatePost step={step} setStep={setStep}/>

    </main>
  )
}
