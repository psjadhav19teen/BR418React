import { useState } from 'react';

// export default function UseStateDemo() {
//   const [text, setText] = useState('hello');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={text} onChange={handleChange} />
//       <p>You typed: {text}</p>
//       <button onClick={() => setText('')}>
//         Reset
//       </button>
//     </>
//   );
// }



export default function UseStateDemo()
{
    const [liked, setLiked] = useState(true);
    function handleChange(e) {
      setLiked(e.target.checked);
    }
  
    return(
      <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange}/>
        I liked this
      </label>
      <p>You {liked?'liked':'did not like'} this</p>
      </>
    )
  }
  