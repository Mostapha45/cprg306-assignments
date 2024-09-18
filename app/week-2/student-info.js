import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <MyHeading />
      <MyGitHub />
    </div>
  );
}

// Returns: <h1>Mostapha Alahmair</h1>
function MyHeading() {
  return <h1>Mostapha Alahmair</h1>;
}

// Renders a link to the GitHub profile using next/link for external navigation
function MyGitHub() {
  return (
    <ul>
      <li>
        <Link href="https://github.com/Mostapha45" target="_blank" rel="noopener noreferrer">
          Visit My GitHub <br />
          https://github.com/Mostapha45
        </Link>
      </li>
    </ul>
  );
}


   
  