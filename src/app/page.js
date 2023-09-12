'use client'
import { useState } from 'react';
import Test from '../components/test'
import Header from '../components/header1'
import ModalCreatePost from '@/components/modalCreatePost';
import ModalPost from '@/components/modalPost';

export default function Home() {
  const [modalCreatePostIsOpen, setModalCreatePostIsOpen] = useState(false)

  const  closeModalCreatePost = () => {
      setModalCreatePostIsOpen(false)
  }

  const openModalCreatePost = () => {
      setModalCreatePostIsOpen(true);
    };

  return (
    <main className="main">
      <Header openModal={openModalCreatePost} />
      {modalCreatePostIsOpen && <ModalCreatePost close={closeModalCreatePost}/>}
      {modalCreatePostIsOpen && <ModalPost close={closeModalCreatePost}/>}

      <section className="main-content">
        
      </section>
    </main>
  )
}
