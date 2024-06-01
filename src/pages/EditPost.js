import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import '../assets/editpost.css'

const EditPost = () => {
  const { no } = useParams()
  const [title, setTitle] = useState('')
  const [user, setUser] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/backend/get_post.php?no=${no}`)
      .then(res => res.json())
      .then(d => {
        setTitle(d.title)
        setUser(d.user)
        setContent(d.content)
      })
      .catch(e => alert(e.message))
  }, [no])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.PUBLIC_URL}/backend/update_post.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `no=${no}&title=${title}&user=${user}&content=${content}`
    })
    .then(res => res.json())
    .then(d => {
      if (d.message) {
        alert('글이 수정되었습니다.')
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
      <main className="edit_main">
        <div className="edit_title">
          <h2>글 수정</h2>
        </div>
        <form onSubmit={handleSubmit} className="edit_form-container">
          <div className="edit_form-group">
            <label>제목</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="edit_form-group">
            <label>글쓴이</label>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required />
          </div>
          <div className="edit_form-group">
            <label>내용</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          </div>
          <div className="edit_button-group">
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

export default EditPost
