const ContactRow = ({setSelectedContactId, props}) => {
    return ( 
        <tr onClick={() => {setSelectedContactId(props.id)}}>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
     );
}
 
export default ContactRow;