'use client'
import { useState } from 'react';
import Test from '../components/test'
import Header from '../components/header'
import ModalCreatePost from '@/components/modalCreatePost';

export default function Home() {
  const [modalCreatePostIsOpen, setModalCreatePostIsOpen] = useState(false)

  const  closeModalCreatePost = () => {
      setModalCreatePostIsOpen(false)
  }

  const openModalCreatePost = () => {
      setModalCreatePostIsOpen(true);
    };

  return (
    <main >
      <Header openModal={openModalCreatePost} />
      {modalCreatePostIsOpen && <ModalCreatePost close={closeModalCreatePost}/>}

    </main>
  )
}
