class FormBuilder {
    constructor(containerId, fieldSchema) {
        this.container = document.getElementById(containerId);
        this.fieldSchema = fieldSchema;
        this.render();
    }

    render() {
        let formHTML = `<form id="dynamicForm">`;
        this.fieldSchema.forEach(field => {
            formHTML += `
                <div class="form-group" style="margin-bottom: 12px;">
                    <label style="display: block; font-weight: bold;">${field.label}</label>
                    <input type="${field.type || 'text'}" name="${field.name || field.label.toLowerCase()}" class="form-input" style="padding: 6px; width: 250px;">
                </div>
            `;
        });
        formHTML += `<button type="submit" style="padding: 8px 16px;">Submit</button></form>`;
        this.container.innerHTML = formHTML;

        document.getElementById('dynamicForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const data = this.getFormData();
            console.log("Submitted Form Data:", data);
            alert(JSON.stringify(data, null, 2));
        });
    }

    getFormData() {
        const formDataObj = {};
        const inputs = this.container.querySelectorAll('.form-input');
        inputs.forEach(input => {
            formDataObj[input.name] = input.value;
        });
        return formDataObj;
    }
}

console.log("Q4 loaded.");
