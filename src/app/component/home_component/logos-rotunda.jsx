export default function LogosForRotate({targetImage}) {
    return (
        <li>
            <img src={"/Logos/" + targetImage} alt={targetImage} />
        </li>
    );
}