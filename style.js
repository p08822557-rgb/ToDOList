  body {
  background: linear-gradient(135deg, #1e1e2f, #2a2a40);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  font-family: Arial, Helvetica, sans-serif;
}

/* Input */
#todo-input {
  outline: none;
  font-size: 1rem;
  padding: 10px;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}

#todo-input:focus {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  transform: scale(1.02);
}

/* Add Button */
#add-btn {
  margin-left: 10px;
  padding: 10px 20px;
  background: #4e54c8;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

#add-btn:hover {
  background: #8f94fb;
  transform: translateY(-2px);
}

/* Todo List */
#todo-list {
  list-style: none;
  margin-top: 30px;
  padding: 0;
  width: 360px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  overflow: hidden;
}

/* Todo Item */
#todo-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  animation: fadeIn 0.4s ease forwards;
}

#todo-list li:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Checkbox */
#todo-list input[type="checkbox"] {
  transform: scale(1.3);
  margin-right: 10px;
  accent-color: #50fa7b;
}

/* Text */
#todo-list span {
  flex: 1;
  cursor: pointer;
}

/* Delete Button */
#todo-list button {
  background: #ff4b5c;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
}

#todo-list button:hover {
  background: #ff6b81;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
