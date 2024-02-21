import { useState, useRef } from 'react';
import { useCreateArticleMutation } from '../api/articleApiSlice'

import { v4 as uuidv4 } from 'uuid';

const ArticleAddForm = () => {
    const [image, setImageURL] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const fileInput = useRef(null);

    const [createArticle] = useCreateArticleMutation();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageURL(imageUrl);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: uuidv4(),
            image,
            title,
            description,
            author
        };

        if (fileInput.current) {
            fileInput.current.value = "";
            fileInput.current.type = "text";
            fileInput.current.type = "file";
        }

        createArticle(data);

        setImageURL('');
        setTitle('');
        setAuthor('');
        setDescription('');
    }

    return (
        <div className="form pb-4 pt-4">
            <h2 className="form__title">Add new Article</h2>
            <form onSubmit={onSubmit} className="border p-4 shadow-lg rounded">
                <div className="input-group mb-3">
                    <input
                        ref={fileInput}
                        onChange={handleImageUpload}
                        type="file" accept="image/*"
                        className="form-control"
                        id="inputGroupFile" />
                    <label className="input-group-text" htmlFor="inputGroupFile">Upload</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fs-4">Add Title</label>
                    <input
                        required
                        type="text"
                        name="title"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Breaking news" />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label fs-4">Add Author Name</label>
                    <input
                        required
                        type="text"
                        name="author"
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Artut Conan Doile" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fs-4">Description</label>
                    <textarea
                        required
                        name="description"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Your description"
                        style={{ "height": '130px' }} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ArticleAddForm;