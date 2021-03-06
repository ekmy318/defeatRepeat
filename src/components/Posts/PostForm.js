import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { WithContext as ReactTags } from 'react-tag-input'
import './Posts.css'

const PostForm = ({ post, showFileField, handleChange, handleSubmit, deleteImageButton, handleAddition, handleDelete, prevImage, handleTagClick }) => {
  const cancelpath = post._id ? `#posts/${post._id}` : '#calendar'
  return (
    <Form className="postForm row" onSubmit={handleSubmit}>
      <Form.Group controlId="file" encType="multipart/form-data" className={post._id ? 'col-lg-6' : ''}>
        {post._id ? <img style={{ filter: showFileField ? 'grayscale(100%)' : 'grayscale(0%)' }} src={post.file || prevImage}/> : ''}
        {showFileField && <Form.Control name="file" type="file" className="inputfile" required onChange={handleChange} />}
      </Form.Group>
      {post._id && <Button variant="outline-dark" className="mb-3" onClick={deleteImageButton}>{showFileField ? 'Cancel' : 'Update Picture'}</Button>}

      <div className="col-lg-6">
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="date" value={post.date} name="date" required onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control type="text" placeholder="notes" value={post.notes} name="notes" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="tags">
          <p>Press Enter after each tag</p>
          <ReactTags tags={post.tags} handleAddition={handleAddition} handleDelete={handleDelete} handleTagClick={handleTagClick} allowDragDrop={false}
          />
        </Form.Group>

        <Button className="mb-3" variant="dark" type="submit">
          Submit
        </Button>
        <Button variant="danger" href={cancelpath} className="ml-2 mb-3">Cancel</Button>
      </div>
    </Form>
  )
}

export default PostForm
