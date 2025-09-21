import { Hono } from "@hono/hono";
// import { createCellBetween, events, schema, tables } from "@runt/schema"

const app = new Hono();

// Define event type
type Event = {
    name: string,
    args: Args[]
}

// Args type defines the potential arguments one could see in an event
type Args = {
    readonly id: string,
    cellType?: string,
    fractionalIndex?: string,
    createdBy?: string,
    modifiedBy?: string,
    source?: string
}

const results: Event[] = [];

// The GET Events path reads in a notebook, takes the cells information, 
// and creats events fron that data
app.get("/events", async (c) => {
    // Read in the notebook information
    const data = await c.req.parseBody();
    const cells = data['cells'];
    for (const cell in cells) {
        createEvent(cell, results);
    }

    return c.json(JSON.stringify(results), 200);
});


// createEvent creates a new event from the cell data and adds it to the results
const createEvent = (cell, results: Event[]): void => {
    // Create the event here

    results.concat(newEvent);
}



// Start server
Deno.serve(app.fetch);