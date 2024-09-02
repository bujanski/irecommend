export default function User() {
    console.log(process.env.MONGO)
    return (
        <div>
            <div>Search for a username</div>
            <div>Most active user contributors</div>
        </div>
    );
}
