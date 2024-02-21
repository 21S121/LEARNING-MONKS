import React, { useState, useRef } from 'react';
import './Repo.css';

const Repo = () => {
  const [files, setFiles] = useState([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const [folders, setFolders] = useState([]);
  const [selectedFolderIndex, setSelectedFolderIndex] = useState(null);

  const fileInputRef = useRef(null);

  const handleDrop = (event) => {
    event.preventDefault();

    // If a folder is selected, move the dropped files into that folder
    if (selectedFolderIndex !== null) {
      const droppedFiles = event.dataTransfer.files;
      moveFilesToFolder(droppedFiles, selectedFolderIndex);
    } else {
      const droppedFiles = event.dataTransfer.files;
      handleFiles(droppedFiles);
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    // If a folder is selected, move the selected files into that folder
    if (selectedFolderIndex !== null) {
      moveFilesToFolder(selectedFiles, selectedFolderIndex);
    } else {
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (fileList) => {
    const newFiles = [...files];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];

      const reader = new FileReader();
      reader.onload = () => {
        const newFile = {
          name: file.name,
          type: file.type,
          content: reader.result,
        };

        newFiles.push(newFile);
        setFiles(newFiles);
      };

      // Check if the file is an image before reading it
      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    }
  };

  const moveFilesToFolder = (fileList, folderIndex) => {
    const newFiles = [...files];
    const folder = folders[folderIndex];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];

      const reader = new FileReader();
      reader.onload = () => {
        const newFile = {
          name: file.name,
          type: file.type,
          content: reader.result,
          folder: folder.name,
        };

        newFiles.push(newFile);
        setFiles(newFiles);
      };

      // Check if the file is an image before reading it
      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    }
  };

  const handleDelete = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);

    // If the deleted file is the selected one, clear the selection
    if (selectedFileIndex === index) {
      setSelectedFileIndex(null);
    }

    setFiles(newFiles);
  };

  const handleFileClick = (index) => {
    setSelectedFileIndex(index);
  };

  const handleFolderClick = (index) => {
    setSelectedFolderIndex(index);
  };

  const handleCreateFolder = () => {
    const newFolders = [...folders];
    const folderName = prompt('Enter folder name:');
    if (folderName) {
      const newFolder = {
        name: folderName,
      };
      newFolders.push(newFolder);
      setFolders(newFolders);
    }
  };

  return (
    <>
      <div>
        <br></br> <br></br>
        <div
          className="drop-area"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <p>Drag and drop files here or click to select</p>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            style={{ display: 'none' }}
            ref={fileInputRef}
          /> <br></br> <br></br>
          <button onClick={() => fileInputRef.current.click()}>Select Files</button>
        </div>
        <button onClick={handleCreateFolder}>Create Folder</button>
        <ul>
          {folders.map((folder, index) => (
            <li key={index} onClick={() => handleFolderClick(index)}>
              <strong>{folder.name}</strong>
            </li>
          ))}
        </ul>
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              <div
                className="file-name"
                onClick={() => handleFileClick(index)}
                style={{ cursor: 'pointer' }}
              >
                <strong>{file.name}</strong> {file.folder && <span>(in {file.folder})</span>}
              </div>
              {selectedFileIndex === index && (
                <>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  {file.type.startsWith('image/') ? (
                    <img src={file.content} alt={file.name} style={{ maxWidth: '100%' }} />
                  ) : (
                    <pre>{file.content}</pre>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Repo;
