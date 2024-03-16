import { API_BASE_URL, WS_BASE_URL } from ".";

export class ApiService {
  teamId: number;

  constructor(teamId: number) {
    this.teamId = teamId;
  }

  async createWorkspace(name: string) {
    const response = await fetch(`${API_BASE_URL}/createWorkspace`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ teamId: this.teamId, name }),
    });
    return this.parseResponse(response);
  }

  async listWorkspaces() {
    const response = await fetch(`${API_BASE_URL}/listWorkspaces`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ teamId: this.teamId }),
    });
    return this.parseResponse(response);
  }

  async deleteWorkspace(workspaceId: number) {
    const response = await fetch(`${API_BASE_URL}/deleteWorkspace`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ teamId: this.teamId, workspaceId }),
    });
    return this.parseResponse(response);
  }

  connectToWebSocket(onMessage: (data: any) => void) {
    const ws = new WebSocket(`${WS_BASE_URL}/${this.teamId}`);
    ws.onopen = () => console.log("WebSocket connection established");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Message received: ", data);
      onMessage(data);
    };
    ws.onerror = (error) => console.error("WebSocket error: ", error);
    return ws;
  }

  async parseResponse(response: Response) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    } else {
      return response.text();
    }
  }
}
