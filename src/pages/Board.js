import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../assets/board.css'

const Board = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/react/clone/backend/get_post.php')
      .then(res => res.json())
      .then(d => {setPosts(d)})
      .catch(e => alert(e.message))
  }, [])

  return (
    <div>
      <Header />
      <main className="board_wrap">
        <div className="board_title">
          <h2>자유 게시판</h2>
          <p>자유롭게 글을 쓸 수 있는 게시판입니다.</p>
        </div>
        <table className="board_list">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((posts, index) => (
              <tr key={index}>
                <td>{posts.no}</td>
                <td><Link to={`/view/${posts.no}`}>{posts.title}</Link></td>
                <td>{posts.user}</td>
                <td>{posts.date}</td>
                <td>{posts.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn_wrap">
          <Link to="/new-post">새 글 작성</Link>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 CloneVing. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Board
