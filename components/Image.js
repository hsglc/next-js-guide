import Image from 'next/image'

const YourComponent = () => (
  <Image
    src="../public/images/profile.jpg" // Route of the image file
    height={400} // Desired size with correct aspect ratio
    width={400} // Desired size with correct aspect ratio
    alt="HS"
  />
)