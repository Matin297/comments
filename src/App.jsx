import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/main';
import CommentSection from './pages/comments'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout title='Comments'><CommentSection /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
