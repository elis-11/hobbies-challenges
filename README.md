## Challenge:
### UI
- Eine Liste mit Usern in JSX anzeigen (User kann ein Avatar Bild haben)
- Liste von Usern soll als Array in State sein
- Users in Array mit Map in Cards umwandeln
- Button: Show Hobbies
- Message Div für User Feedback
## Behaviour:
- User selecten per Click auf User Card
- User zwischenspeichern in State (=> in userSelected)
- Bei Button Click
- Wenn selected User Hobbies hat => zeige "User hat X hobbies" (X = anzahl Hobbies im Hobbies Array)
   Wenn selected User KEINE Hobbies hat (Empty Array) => zeige: "User hat keine Hobbies!"
- Nutzen MESSAGE State für das Feedback
   Gebe Message State in Message Div aus <div className="message">{message}</div>