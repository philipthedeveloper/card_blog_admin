import React, { useRef, useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../components/CustomToolBar";
import "react-quill/dist/quill.snow.css";
// import CustomToolbar from "../components/CustomToolBar";

function CreatePost() {
  const fileInputRef = useRef(null);
  const [content, setContent] = useState("");

  // const modules = {
  //   toolbar: {
  //     container: "#custom-toolbar",
  //   },
  // };

  const handleContentChange = (html) => {
    setContent(html);
    console.log(html);
  };

  // const formats = [
  //   "font",
  //   "size",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "color",
  //   "background",
  //   "script",
  //   "header",
  //   "blockquote",
  //   "code-block",
  //   "indent",
  //   "list",
  //   "direction",
  //   "align",
  //   "link",
  //   "image",
  //   "video",
  //   "formula",
  // ];

  const handleThumbnailUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <CreatePostContainer>
      <CreatePostForm>
        <FormHeader>
          <FormHeading>Create Post</FormHeading>
        </FormHeader>
        <PostInfoSection>
          <Container>
            <FormGroup>
              <Labels>Title</Labels>
              <Input
                type={"text"}
                maxLength={80}
                placeholder={"Enter Post Title"}
              />
            </FormGroup>
            <FormGroup>
              <Labels>Thumbnail Image</Labels>
              <ThumbnailContainer>
                <i
                  className="fa-solid fa-cloud-arrow-up"
                  onClick={handleThumbnailUpload}
                ></i>
                <Input type={"file"} ref={fileInputRef} />
              </ThumbnailContainer>
            </FormGroup>
          </Container>
          <FormGroup>
            <Labels>Description</Labels>
            <PostDescription placeholder="Enter Post Description" />
          </FormGroup>
        </PostInfoSection>
        <ReactQuillEditor>
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            style={{ height: "85%", borderRadius: "1.4rem", border: "none" }}
            formats={formats}
            modules={modules}
            placeholder="Write your post"
            id="quillTextArea"
          />
        </ReactQuillEditor>
      </CreatePostForm>
    </CreatePostContainer>
  );
}

const CreatePostContainer = styled.main`
  background-color: red;
  margin: 1rem 4rem;
  border-radius: 1.4rem;
  padding: 1rem;
  background-color: var(--reverseTextColor);
  // box-shadow: 0px 2px 5px 2px var(--shadow);
`;

const FormHeader = styled.header`
  margin-bottom: 1rem;
`;
const FormHeading = styled.h1`
  color: var(--primary-color);
  font-size: 1.8rem;
`;
const CreatePostForm = styled.form`
  overflow-y: hidden;
  height: 100%;
`;
const PostInfoSection = styled.section`
  // background-color: red;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;
  flex-basis: 45%;
  flex-grow: 1;
`;
const Labels = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: var(--primary-color);
`;
const Input = styled.input`
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  font-family: inherit;
  background-color: var(--main-background);
  color: var(--textColor);

  &[type="file"] {
    width: 100%;
    cursor: pointer;
    color: var(--primary-color) !important;
  }
`;
const PostDescription = styled.textarea`
  resize: none;
  height: 100px;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  font-family: inherit;
  background-color: var(--main-background);
  padding: 0.7rem 1rem;
  color: var(--textColor);
`;

const ThumbnailContainer = styled.div`
  background-color: var(--main-background);
  border-radius: 0.4rem;
  padding-left: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--primary-color) !important;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const ReactQuillEditor = styled.div`
  height: 300px;
  background-color: var(--main-background);
  border-radius: 1.4rem;
`;

export default CreatePost;
