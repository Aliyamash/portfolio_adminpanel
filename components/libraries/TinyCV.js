
import React,   { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyCV() {
  const editorRef = useRef(null);


 
      console.log(editorRef.current);


  return (
  <div className='flex justify-between h-60'>
    {/* cv title */}
    <div>
      <h1 className='text-2xl mb-5 font-bold'>Your CV :</h1>
      <p className='text-xl my-4'>Please enter the resume of the desired person👉</p>
      <p className='text-xs text-gray-400 my-2'>The stronger your resume, the easier it will be to get hired</p>
    </div>

    {/* editor */}
      <div className='px-16 py-8'>
      <Editor
      ref={editorRef}
      apiKey='l7ypbjxa9fg98yt00md8kgbtttv6uloxjn0fupbd041g54xg'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue="Enter Your CV❤️"
    />
      </div>

  </div>
  );
} 
