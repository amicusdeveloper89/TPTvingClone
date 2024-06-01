import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import '../assets/newpost.css'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [user, setUser] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${process.env.PUBLIC_URL}/backend/send_post.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        title,
        user,
        content
      }).toString()
    })
    .then(res => res.json())
    .then(d => {
      if (d.message) {
        alert('새 글이 작성되었습니다.')
        navigate('/board')
      } else {
        alert('Error: ' + d.error)
      }
    })
    .catch(e => alert('Error: ' + e.message))
  }

  const handleCancel = () => {
    navigate('/board')
  }

  return (
    <div>
      <Header />
      <main className="new_main">
        <div className="new_title">
          <h2>새 글 작성</h2>
        </div>
        <form onSubmit={handleSubmit} className="new_form-container">
          <div className="new_form-group">
            <label>제목</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="new_form-group">
            <label>글쓴이</label>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required />
          </div>
          <div className="new_form-group">
            <label>내용</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          </div>
          <div className="new_button-group">
            <button type="submit">저장</button>
            <button type="button" onClick={handleCancel}>취소</button>
          </div>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 CloneVing. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default NewPost
